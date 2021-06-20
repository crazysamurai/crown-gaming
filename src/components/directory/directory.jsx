import React from "react";
import "./directory.scss";
import MenuItem from "../menu-item/menu-item";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "New in Store",
          imageUrl:
            "https://cdn.cloudflare.steamstatic.com/steam/apps/1196590/header.jpg?t=1623139224",
          id: 1,
          linkUrl: "shop/new",
        },
        {
          title: "Top Sellers",
          imageUrl:
            "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg?t=1618851907",
          id: 2,
          linkUrl: "shop/top",
        },
        {
          title: "Upcoming",
          imageUrl:
            "https://cdn.akamai.steamstatic.com/steam/apps/1551360/header.jpg?t=1623945944",
          id: 3,
          linkUrl: "shop/upcoming",
        },
        {
          title: "Popular",
          imageUrl:
            "https://cdn.akamai.steamstatic.com/steam/apps/374320/header.jpg?t=1608544497",

          id: 4,
          linkUrl: "shop/popular",
        },
        {
          title: "Free to Play",
          imageUrl:
            "https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg?t=1623182945",

          id: 5,
          linkUrl: "shop/free",
        },
        {
          title: "Recommended",
          imageUrl:
            "https://cdn.akamai.steamstatic.com/steam/apps/546560/header.jpg?t=1605207546",

          id: 6,
          linkUrl: "shop/recommended",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}
export default Directory;
