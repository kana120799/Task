export const reduce = (state, action) => {
  if (action.type === "INC") {
    const updateState = state.item.map((ele, ind) => {
      if (ele.id === action.payload) {
        return { ...ele, total: ++ele.total, cost: ele.price * ele.total };
      }
      return ele;
    });
    return { ...state, item: updateState };
  }
  if (action.type === "DEC") {
    const updateState = state.item.map((ele, ind) => {
      if (ele.id === action.payload && ele.total > 0) {
        return { ...ele, total: --ele.total, cost: ele.price * ele.total };
      }
      return ele;
    });
    return { ...state, item: updateState };
  }
  if (action.type === "UPDATE") {
    const updateTotalItem = state.item.filter((ele, ind) => {
      if (ele.total > 0) {
        return ele;
      }
    });

    return {
      ...state,
      totalItem: updateTotalItem.length,
    };
  }
  if (action.type === "UPDATEAMOUNT") {
    var sum = 0;
    const updateTotalAmount = state.item.reduce((accum, ele, ind) => {
      if (ele.cost > 0) {
        accum.push(ele.cost);
      }
      return accum;
    }, []);
    for (var i = 0; i < updateTotalAmount.length; i++) {
      sum += updateTotalAmount[i];
    }
    return { ...state, totalAmount: sum };
  }
};
