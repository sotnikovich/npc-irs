import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { FixedSizeList } from "react-window";
import ListItemText from "@mui/material/ListItemText";

const regions = [
  "Республика Адыгея",
  "Республика Алтай",
  "Республика Башкортостан",
  "Республика Бурятия",
  "Республика Дагестан",
  "Республика Ингушетия",
  "Кабардино-Балкарская Республика",
  "Республика Калмыкия",
  "Карачаево-Черкесская Республика",
  "Республика Карелия",
];

export default function RegionList() {
  return (
    <FixedSizeList
      height={400}
      width={"17%"}
      itemSize={46}
      itemCount={regions.length}
      overscanCount={5}
    >
      {({ index, style }) => {
        return (
          <ListItem style={style} key={index} component="div" disablePadding>
            <ListItemButton>
              <ListItemText primary={regions[index]} />
            </ListItemButton>
          </ListItem>
        );
      }}
    </FixedSizeList>
  );
}
