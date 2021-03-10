function optionUI ()
{
    return`
    <div style="
        border-radius: 10px;
        overflow:hidden;
        width: 160px;
        height: 110px;
        transition: opacity 1s;
    "
    onclick="optionUI.HandleClick(this)"
    >
        <img style="
            width: 100%;
            height: 100%;
            object-fit:cover;
        "
            src="https://placekitten.com/160/110"/>
    </div>

    <div style="
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        position: relative;
        bottom: 25px;
        width: 160px;
        height: 25px;
        background-color: #C4C4C4;
        opacity: 0.7;
        border-radius: 0px 0px 10px 10px;
    "> COVID-19 </div>
    `
}

optionUI.HandleClick = (el) => {
    el.style.opacity = 0.5;
}

export const option = optionUI()