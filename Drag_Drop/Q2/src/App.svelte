<script>
  import { flip } from "svelte/animate";
  import user from "./Data/user.json";

  //   ==>              User data from JSON
  var data = user.data;
  var colorpicker = user.colorData;
  //   <=

  // ==>                         when Drag Happen          ///////////////////////////
  const dragstart = (event, source) => {
    event.dataTransfer.setData("detail", source);
  };
  // <==
  // ==>                        when Drop Happen          ///////////////////////////

  const drop = (event, destination) => {
    const source = parseInt(event.dataTransfer.getData("detail"));
    const newTracklist = [...data];

    if (source < destination) {
      newTracklist.splice(destination + 1, 0, newTracklist[source]);

      newTracklist.splice(source, 1);
    } else {
      newTracklist.splice(destination, 0, newTracklist[source]);
      newTracklist.splice(source + 1, 1);
    }
    data = newTracklist;
  };
  // <==
</script>

<!-- ////////////////////////////////////              Svelte HTML                   /////////////////////////////// -->

<div class="container">
  <table class="table table-borderless table-dark container-fluid">
    <thead>
      <tr style="color: #626466">
        <th />
        <th scope="col">Company Name</th>
        <th scope="col">User Name</th>
        <th scope="col">Contact</th>
        <th scope="col">Payment Status</th>
        <th scope="col">Payment Date</th>
      </tr>
    </thead>
    <tbody>
      {#each data as item, index (item.id)}
        <tr
          class="main1"
          ondragover="return false"
          animate:flip
          draggable={true}
          on:dragstart={(event) => dragstart(event, index)}
          on:drop|preventDefault={(event) => drop(event, index)}
        >
          <!--  // ==>                                                      Company Name                      ///////////////////////////////////////////// -->
          <td />

          <td>
            <div style=" display: flex ">
              <div class="companylogo">
                <div
                  style="
			                 	height: 28px;
				                width: 28px;
				                border-radius: 13px;
				                margin-right: 3px;
				                display: flex;
			                 	align-items: center;
				                justify-content: center;
				                background-color:{colorpicker[index]}
			                 	"
                >
                  {item.logo}
                </div>
              </div>
              <div>{item.companyName}</div>
            </div>
          </td>
          <!-- // <== -->
          <!--  // ==>                                                        User Name                      ////////////////////////////////////////////// -->
          <td>
            <div
              style="
                    display: flex;
                    align-items: center;
                   "
            >
              <div style="margin-right: 5px">
                <i class={`${item.iconClass}`} />
              </div>
              <div>{item.userName}</div>
            </div>
          </td>
          <!-- // <== -->

          <!-- // ==>                                                      Contact                     ///////////////////////////////////////////////////// -->
          <td>{item.contact}</td>
          <!-- // <== -->

          <!-- // ==>                                                     Payment Status                      ////////////////////////////////////////////////// -->

          {#if item.paymentStatus.payment}
            <td>
              <button
                style="text-transform: uppercase"
                type="button"
                class={`btn btn-outline-${item.paymentStatus.btncolor} btn-light`}
              >
                {item.paymentStatus.status}
              </button>
            </td>
          {:else}
            <td />
          {/if}
          <!-- // <== -->
          <!-- // ==>                                                       Payment Date                      ///////////////////////////////////////////////// -->

          <td>
            <div
              style="
				            display: flex;
				            align-items: center"
            >
              <div style="margin-right:5px">
                {#if item.paymentStatus.status === "pending"}
                  <div class="btn1" />
                {:else if item.paymentStatus.status === "done" || item.paymentStatus.status === "failed"}
                  <div class="btn2" />
                {:else}
                  <div class="btn3" />
                {/if}
              </div>
              <div>{item.date}</div>
            </div>
          </td>
          <!-- // <== -->
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<!-- ////////////////////////////////////                                        Svelte Styling                                     /////////////////////////////// -->
<style>
  :global(body) {
    user-select: none;
  }
  .container {
    margin-top: 55px;
  }
  .main1 {
    cursor: grab;
  }

  .companylogo {
    height: 30px;
    width: 30px;
    border-radius: 15px;
    margin-right: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .btn1 {
    height: 7px;
    width: 7px;
    border-radius: 4px;
    background-color: #ed5a5a;
  }
  .btn2 {
    height: 7px;
    width: 7px;
    border-radius: 4px;
    background-color: #4caf4c;
  }
  .btn3 {
    height: 7px;
    width: 7px;
    border-radius: 4px;
    background-color: orange;
  }
</style>
