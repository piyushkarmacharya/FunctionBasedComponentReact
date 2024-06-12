import React from 'react'


export default function Alert(props) {
    const getUpper=(txt)=>{
        let temp=txt.toLowerCase();
        return temp.charAt(0).toUpperCase() + txt.slice(1);
    }
    return (
        props.alert &&
        <div>
            {/* alertTyped : primary,success,danger,warning */}
            <div class={`alert alert-${props.alert.alertType} alert-dismissible fade show`} role="alert">
                <strong>{getUpper(props.alert.alertType)}</strong> {props.alert.msg}
            </div>
        </div>
    )
}
