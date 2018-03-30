import React, { Component } from "react";
import { ReactiveBase } from "@appbaseio/reactivesearch";
import { DateRange } from "@appbaseio/reactivesearch";
import { NumberBox } from "@appbaseio/reactivesearch";
import { RangeSlider } from "@appbaseio/reactivesearch";
import { ResultCard } from "@appbaseio/reactivesearch";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <ReactiveBase
          app="housing"
          credentials="0aL1X5Vts:1ee67be1-9195-4f4b-bd4f-a91cd1b5e4b5"
          type="listing"
          theme={{
            primaryColor: "#FF3A4E"
          }}
        >
          <nav className="nav">
            <div className="title">Search Page</div>
          </nav>
          <DateRange
            dataField="date_from"
            componentId="DateRangeSensor"
            title="When"
            numberOfMonths={2}
            queryFormat="basic_date" // yyyyMMdd
          />
          <NumberBox
            componentId="GuestSensor"
            dataField="accomodates"
            title="Guests"
            defaultSelected={2}
            labelPosition="right"
            data={{
              start: 1,
              end: 16
            }}
          />
          <RangeSlider
            componentId="PriceSensor"
            dataField="price"
            title="Price Range"
            range={{
              start: 10,
              end: 250
            }}
            rangeLabels={{
              start: "$10",
              end: "$250"
            }}
            defaultSelected={{
              start: 10,
              end: 50
            }}
            stepValue={10}
            interval={20}
            react={{
              and: ["DateRangeSensor"]
            }}
          />
          <ResultCard
            className="right-col"
            componentId="SearchResult"
            dataField="name"
            from={0}
            size={12}
            onData={data => ({
              image: data.image,
              title: data.name,
              description: (
                <div>
                  <div className="price">${data.price}</div>
                  <p className="info">
                    {data.room_type} · {data.accommodates} guests
                  </p>
                </div>
              ),
              url: data.listing.url
            })}
            pagination
            react={{
              and: ["GuestSensor", "PriceSensor", "DateRangeSensor"]
            }}
            innerClass={{
              resultStats: "result-stats",
              list: "list",
              listItem: "list-item",
              image: "image"
            }}
          />
        </ReactiveBase>
      </div>
    );
  }
}

export default App;
