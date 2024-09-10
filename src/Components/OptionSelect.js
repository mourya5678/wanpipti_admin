import React, { useState } from 'react';

const OptionSelect = () => {
    const [] = useState();
    return (
        <div>
            <div className="ct_action_btns">
                <select className="form-control ct_input py-2 h-auto" value={item?.status == true ? "Paid" : "Not Paid"} onChange={() => onHandleStatusChange()}>
                    <option value="true">Paid</option>
                    <option value="false">Not Paid</option>
                </select>
            </div>
        </div>
    )
}

export default OptionSelect;