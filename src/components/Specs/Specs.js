import React from "react";
import Parts from "../Parts/Parts";

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from "slugify";

export default function Specs(props) {
  const { feature, USCurrencyFormat, features, selected } = props;

  const options = features[feature].map((item) => {
    const itemHash = slugify(JSON.stringify(item));

    return (
      <div key={itemHash} className="feature__item">
        <input
          type="radio"
          id={itemHash}
          className="feature__option"
          name={slugify(feature)}
          checked={item.name === selected[feature].name}
          onChange={(e) => props.updateFeature(feature, item)}
        />
        <label htmlFor={itemHash} className="feature__label">
          {item.name} ({USCurrencyFormat.format(item.cost)})
        </label>
      </div>
    );
  });
  return <Parts options={options} feature={feature} />;
}
