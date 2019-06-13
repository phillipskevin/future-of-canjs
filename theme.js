import { dark } from "mdx-deck/themes"
import nightOwl from "prism-react-renderer/themes/nightOwl";

export const theme = {
  ...dark,
  css: {
    ...dark.css,
    ul: {
      li: {
        textAlign: "left"
      }
    }
  },
  codeSurfer: {
    ...nightOwl,
    showNumbers: false
  },
};
