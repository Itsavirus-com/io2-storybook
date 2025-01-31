import type { Preview } from "@storybook/react";

// Import global styles
import '../stories/assets/sass/style.scss';
import '../stories/assets/keenicons/duotone/style.css';
import '../stories/assets/keenicons/outline/style.css';
import '../stories/assets/keenicons/solid/style.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#1e1e2d',
        },
      ],
    },
  },
};

export default preview;