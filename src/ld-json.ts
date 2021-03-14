import Handlebars from "handlebars";

export default (data: object) =>
  new Handlebars.SafeString(
    `<script type='application/ld+json'>${JSON.stringify(data)}</script>`
  );
