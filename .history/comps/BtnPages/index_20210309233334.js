function BtnPagesUI (circleTwo="#9A9999", circleThree="#9A9999")
{
    return`
        <div style="
            display: flex;
            flex-direction: row;
            max-width: 228px;
            min-width: 228px;
            justify-content: space-between;
            align-items: center;
        ">
            <div style="
                font-size: 25px;
                font-weight: bold;
                color: #545454;
                transition: text-shadow 0.5s;
            "
            onmouseover='BtnPagesUI.HandleMouseOver(this)'
            onmouseout='BtnPagesUI.HandleMouseOut(this)'
            > <<< </div>

            <div style="
                width: 16px;
                height: 16px;
                border-radius: 50%;
                background-color: #FF7A00;
            "
            onmouseover='BtnPagesUI.HandleMouseOver(this)'
            onmouseout='BtnPagesUI.HandleMouseOut(this)'
            ></div>
            <div style="
                width: 16px;
                height: 16px;
                border-radius: 50%;
                background-color: ${circleTwo};
            "
            onmouseover='BtnPagesUI.HandleMouseOver(this)'
            onmouseout='BtnPagesUI.HandleMouseOut(this)'
            ></div>
            <div style="
                width: 16px;
                height: 16px;
                border-radius: 50%;
                background-color: ${circleThree};
            "
            onmouseover='BtnPagesUI.HandleMouseOver(this)'
            onmouseout='BtnPagesUI.HandleMouseOut(this)'
            ></div>

            <div style ="
                font-size: 25px;
                font-weight: bold;
                color: #545454;
                transition: text-shadow 0.5s;
            "
            onmouseover='BtnPagesUI.HandleMouseOver(this)'
            onmouseout='BtnPagesUI.HandleMouseOut(this)'
            > >>> </div>
        </div>
    `
}

BtnPagesUI.HandleMouseOver = (el) => {
    el.style.textShadow = "0px 0px 3px black"
}

BtnPagesUI.HandleMouseOut = (el) => {
    el.style.textShadow = "0px 0px 0px #545454"
}



//export const BtnPages = BtnPagesUI()