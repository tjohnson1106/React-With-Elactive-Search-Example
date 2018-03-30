import React, { Component } from "react";
import { ReactiveBase } from "@appbaseio/reactivesearch";
import { DateRange } from "@appbaseio/reactivesearch";
import { NumberBox } from "@appbaseio/reactivesearch";
import { RangeSlider } from "@appbaseio/reactivesearch";

import "./App.css";

class App extends Component {
  render() {
    return (
      <section className="container">
        <ReactiveBase
          app="housing"
          credentials="0aL1X5Vts:1ee67be1-9195-4f4b-bd4f-a91cd1b5e4b5"
          type="listing"
        >
          <DateRange
            dataField="date_from"
            componentId="DateRangeSensor"
            title="When"
            numberOfMonths={1}
            queryFormat="basic_date" // yyyyMMdd
          />
          <NumberBox
            componentId="GuestSensor"
            dataField="accomodates"
            title="Guests"
            defaultSelected={2}
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
          />
          Reactive Search
        </ReactiveBase>
      </section>
    );
  }
}

export default App;
