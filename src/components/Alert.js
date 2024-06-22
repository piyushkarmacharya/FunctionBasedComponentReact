import React from 'react'


export default function Alert(props) {
    const getUpper=(txt)=>{
        let temp=txt.toLowerCase();
        return temp.charAt(0).toUpperCase() + txt.slice(1);
    }
    return (
        <div style={{height:'60px'}}>
            {
                props.alert &&
                <div>
                    {/* alertTyped : primary,success,danger,warning */}
                    <div className={`alert alert-${props.alert.alertType} alert-dismissible fade show`} role="alert">
                        <strong>{getUpper(props.alert.alertType)}</strong> {props.alert.msg}
                    </div>
                </div>
            }
        </div>
        
    )
}
