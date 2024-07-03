import React from "react";
import { Button, ConfigProvider, Card } from "antd";
import { TinyColor } from "@ctrl/tinycolor";
import { formatsmoney } from "../utils/format";

const { Meta } = Card;
const colors1 = ["#6253E1", " #04BEFE"];
const getHoverColors = (colors) =>
  colors.map((color) => new TinyColor(color).lighten(5).toString());
const getActiveColors = (colors) =>
  colors.map((color) => new TinyColor(color).darken(5).toString());

export default function ProductItem({
  src,
  description,
  title,
  id,
  handleAdd,
}) {
  return (
    <>
      <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={
          <img
            className="w-40 h-[300px]"
            style={{ objectFit: "cover" }}
            alt="example"
            src={src}
          />
        }
      >
        <Meta
          title={title}
          description={formatsmoney(description)}
          className="p-2"
        />

        <ConfigProvider
          theme={{
            components: {
              Button: {
                colorPrimary: `linear-gradient(135deg, ${colors1.join(", ")})`,
                colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(
                  colors1
                ).join(", ")})`,
                colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(
                  colors1
                ).join(", ")})`,
                lineWidth: 0,
              },
            },
          }}
        >
          <Button onClick={() => handleAdd(id)} type="primary" size="large">
            mucs luonnnn
          </Button>
        </ConfigProvider>
      </Card>
    </>
  );
}
