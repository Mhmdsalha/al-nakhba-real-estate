export const project = {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "type", title: "Type", type: "string", options: { list: ["selling", "investment", "management"] } },
    { name: "location", title: "Location", type: "string" },
    { name: "price", title: "Price", type: "string" },
    { name: "returnRate", title: "Return Rate", type: "string" },
    { name: "status", title: "Status", type: "string" },
    { name: "featured", title: "Featured", type: "boolean" },
    { name: "image", title: "Image", type: "image" },
  ],
};
