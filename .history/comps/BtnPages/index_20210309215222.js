function BtnPagesUI (circleTwo="#9A9999", circleThree="#9A9999")
{
    return`
        <div style="
            display: flex;
            flex-direction: row;
            max-width: 228px;
            justify-content: space-between;
            align-items: center;
        ">
            <div style="
                font-size: 25px;
                font-weight: bold;
                color: #545454;
                transition: opacity 1s;
            "
            onclick='BtnPagesUI.HandleClick(this)'
            > <<< </div>

            <div style="
                width: 16px;
                height: 16px;
                border-radius: 50%;
                background-color: #FF7A00;
            "></div>
            <div style="
                width: 16px;
                height: 16px;
                border-radius: 50%;
                background-color: ${circleTwo};
            "></div>
            <div style="
                width: 16px;
                height: 16px;
                border-radius: 50%;
                background-color: ${circleThree};
            "></div>

            <div style ="
                font-size: 25px;
                font-weight: bold;
                color: #545454;
                transition: opacity 1s;
            "
            onclick='BtnPagesUI.HandleClick(this)'
            > >>> </div>
        </div>
    `
}

BtnPagesUI.HandleClick = (el) => {
    el.style.opacity = 0.5;
}

//export const BtnPages = BtnPagesUI()