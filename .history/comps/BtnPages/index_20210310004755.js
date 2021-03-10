function BtnPagesUI (circleTwo="#9A9999", circleThree="#9A9999", lastPage="../General_info_structure/General_info-1.html", nextPage="../General_info_structure/General_info-1.html")
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
            onmouseover='BtnPagesUI.HandleMouseOver1(this)'
            onmouseout='BtnPagesUI.HandleMouseOut1(this)'
            onclick='window.location.href="${lastPage}"'
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
                transition: border 0.5s;
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
            onmouseover='BtnPagesUI.HandleMouseOver1(this)'
            onmouseout='BtnPagesUI.HandleMouseOut1(this)'
            onclick='window.location.href="${nextPage}"'
            > >>> </div>
        </div>
    `
}

BtnPagesUI.HandleMouseOver1 = (el) => {
    el.style.textShadow = "0px 0px 3px black"
}

BtnPagesUI.HandleMouseOut1 = (el) => {
    el.style.textShadow = "0px 0px 0px #545454"
}

BtnPagesUI.HandleMouseOver2 = (el) => {
    el.style.border = " 2px solid #545454"
}
BtnPagesUI.HandleMouseOut2 = (el) => {
    el.style.border = " 0px solid #545454"
}



//export const BtnPages = BtnPagesUI()