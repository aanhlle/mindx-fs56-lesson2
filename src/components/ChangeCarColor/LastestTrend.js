import LATEST_TREND from "../../const";

function LastestTrend(params) {
    const list_trend = LATEST_TREND.map((trend) => (
        <div className="latestTrend__item" key={trend.id}>
            <img src={trend.img.src} alt={trend.img.alt} />
            <div className="latestTrend__text">
                <div className="numDiscount">
                    <p>{trend.numDiscount}</p>
                </div>
                <div className="sex">
                    <p>{trend.sex}</p>
                </div>
            </div>
            <div className="latestTrend__item-descrip">
                <p>{trend.itemDescription}</p>
            </div>
        </div>
    ));

    return (
        <section className="latestTrend">
            <h1>Latest Fashion Trends</h1>
            <div className="latestTrend__container">{list_trend}</div>
        </section>
    );
}

export default LastestTrend;
