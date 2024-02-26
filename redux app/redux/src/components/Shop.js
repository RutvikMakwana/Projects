import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

const Shop = () => {
  const dispatch = useDispatch();
  const { WithdrawMoney, depositeMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  return (
    <div>
      <h2>Deposite/Withdraw money</h2>
      <button className="btn btn-primary" onClick={() => WithdrawMoney(100)}>
        {" "}
        -
      </button>
      Update Balance
      <button className="btn btn-primary" onClick={() => depositeMoney(100)}>
        {" "}
        +
      </button>
    </div>
  );
};

export default Shop;
