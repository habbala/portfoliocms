module.exports = [
  {
  name: "Portfolio project",
  description: "Mock title.",
  displayField: "title",
  fields: [
    {
      id: "title",
      name: "Title",
      type: "Symbol",
      localized: false,
      required: false,
      validations: [],
      disabled: false,
      omitted: false
    },
    {
      id: "description",
      name: "Description",
      type: "Text",
      localized: false,
      required: false,
      validations: [],
      disabled: false,
      omitted: false
    },
    {
      id: "featuredImage",
      name: "Featured Image",
      type: "Link",
      localized: false,
      required: false,
      validations: [],
      disabled: false,
      omitted: false,
      linkType: "Asset"
    }
  ],
  sys: {
    space: {
      sys: {
        type: "Link",
        linkType: "Space",
        id: "q5d90ddpmtuz"
      }
    },
  }
}]
