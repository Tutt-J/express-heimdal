function woodHateoas(wood) {
  const id = wood.id;
  return [
    {
      rel: "self",
      method: "GET",
      href: `/api/wood/${id}`,
    },
    {
      rel: "edit",
      method: "PUT",
      href: `/api/wood/${id}`,
    },
    {
      rel: "delete",
      method: "DELETE",
      href: `/api/wood/${id}`,
    },
    {
      rel: "sameHardness",
      method: "GET",
      href: `/api/wood/hardness/${wood.hardness}`,
    },
  ];
}

function woodCollectionHateoas() {
  return [
    {
      rel: "all",
      method: "GET",
      href: "/api/wood/",
    },
    {
      rel: "by hardness",
      method: "GET",
      href: "/api/wood/:hardness",
    },
    {
      rel: "create",
      method: "POST",
      href: "/api/wood/",
    },
  ];
}

module.exports = {
  woodHateoas,
  woodCollectionHateoas
};
