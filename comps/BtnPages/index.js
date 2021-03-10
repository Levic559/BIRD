function BtnPagesUI ()
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
                font-size: 30px;
                font-weight: bold;
                color: #545454;
                transition: opacity 1s;
            "
            onclick='BtnPagesUI.HandleClick(this)'
            > <<< </div>

            <div style="
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background-color: #9A9999;
            "></div>
            <div style="
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background-color: #9A9999;
            "></div>
            <div style="
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background-color: #9A9999;
            "></div>

            <div style ="
                font-size: 30px;
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

export const BtnPages = BtnPagesUI()