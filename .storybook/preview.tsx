import "../src/styles/custom-bootstrap.scss";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import React from "react";
import Container from "react-bootstrap/Container";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        viewport1: {
          name: "360x800 (xs)",
          styles: {
            width: "360px",
            height: "800px",
          },
        },
        viewport2: {
          name: "390x844 (xs)",
          styles: {
            width: "390px",
            height: "844px",
          },
        },
        viewport3: {
          name: "601x962 (sm)",
          styles: {
            width: "601px",
            height: "962px",
          },
        },
        viewport4: {
          name: "768x1024 (md)",
          styles: {
            width: "768px",
            height: "1024px",
          },
        },
        viewport5: {
          name: "1024x768 (lg)",
          styles: {
            width: "1024px",
            height: "768px",
          },
        },
        viewport6: {
          name: "1280x720 (xl)",
          styles: {
            width: "1280px",
            height: "720px",
          },
        },
        viewport7: {
          name: "1366x768 (xl)",
          styles: {
            width: "1366px",
            height: "768px",
          },
        },
        viewport8: {
          name: "1440x900 (xxl)",
          styles: {
            width: "1440px",
            height: "900px",
          },
        },
        viewport9: {
          name: "1536x864 (xxl)",
          styles: {
            width: "1536px",
            height: "864px",
          },
        },
        viewport10: {
          name: "1920x1080 (xxl)",
          styles: {
            width: "1920px",
            height: "1080px",
          },
        },
      },
    },
  },
  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
      attributeName: "data-bs-theme",
    }),
    (Story) => (
      <Container className="py-3 vh-100">
        <Story />
      </Container>
    ),
  ],
};

export default preview;
