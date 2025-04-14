export interface IServicio {
  id: number;
  name: string;
  shortDescription: string;
  description: string;
  trabajoId: ITrabajo["id"][];
}

export interface ITrabajo {
  id: number;
  workType: string;
  name: string;
  imgs: IImageSet[];
}

export const servicios: IServicio[] = [
  {
    id: 1,
    name: "Aislación térmica",
    shortDescription: "lorem ipsum dolor sit amet, consectetur adipis",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt ligula neque, sit amet fermentum sem blandit non. Praesent leo metus, pellentesque eu nibh eget, convallis venenatis erat. Duis eu erat non odio lobortis imperdiet. Aliquam ac interdum magna. In efficitur sem quis diam aliquam dictum. Aliquam venenatis dignissim arcu non sodales. Nullam tempus urna eu nunc volutpat, quis venenatis est vulputate. Donec dapibus nunc neque, in congue nisl interdum quis. Nam vitae libero ut leo porta iaculis at nec turpis. Nulla sem sapien, dapibus a elit vel, sollicitudin sollicitudin nunc. Donec nibh eros, dictum non diam vitae, commodo ullamcorper risus. Aenean mi leo, tristique rhoncus egestas vel, cursus vel est. Ut ullamcorper consequat dui non facilisis. Aenean nibh massa.",
    trabajoId: [1, 2],
  },
  {
    id: 2,
    name: "Pintura",
    shortDescription: "lorem ipsum dolorr sit amet, consectetur adipis",
    description: "lorem ipsum dolorr sit amet, consectetur adipis piso pisa",
    trabajoId: [3, 4],
  },
];

// Tipo de trabajo: AT: Aislacion Termica

export const trabajos: ITrabajo[] = [
  {
    id: 1,
    workType: "Aislación térmica",
    name: "Ardion",
    imgs: [
      { id: 1, src: "/img1.jpg" },
      { id: 2, src: "/img2.jpg" },
      { id: 3, src: "/logoO.png" },
    ],
  },
  {
    id: 2,
    workType: "Aislación térmica",
    name: "Ardion2",
    imgs: [
      { id: 1, src: "/img1.jpg" },
      { id: 2, src: "/logo.jpg" },
      { id: 3, src: "/img3.jpg" },
    ],
  },
  {
    id: 5,
    workType: "Aislación térmica",
    name: "Ardion",
    imgs: [
      { id: 1, src: "/img1.jpg" },
      { id: 2, src: "/logo.jpg" },
      { id: 3, src: "/img3.jpg" },
    ],
  },
  {
    id: 6,
    workType: "Aislación térmica",
    name: "Ardion2",
    imgs: [
      { id: 1, src: "/img1.jpg" },
      { id: 2, src: "/logo.jpg" },
      { id: 3, src: "/img3.jpg" },
    ],
  },
  {
    id: 7,
    workType: "Aislación térmica",
    name: "Ardion",
    imgs: [
      { id: 1, src: "/img1.jpg" },
      { id: 2, src: "/logo.jpg" },
      { id: 3, src: "/img3.jpg" },
    ],
  },
  {
    id: 8,
    workType: "Aislación térmica",
    name: "Ardion2",
    imgs: [
      { id: 1, src: "/img1.jpg" },
      { id: 2, src: "/logo.jpg" },
      { id: 3, src: "/img3.jpg" },
    ],
  },
  {
    id: 9,
    workType: "Aislación térmica",
    name: "Ardion",
    imgs: [
      { id: 1, src: "/img1.jpg" },
      { id: 2, src: "/logo.jpg" },
      { id: 3, src: "/img3.jpg" },
    ],
  },
  {
    id: 3,
    workType: "Pintura",
    name: "Ardion3",
    imgs: [
      { id: 1, src: "/img1.jpg" },
      { id: 2, src: "/logo.jpg" },
      { id: 3, src: "/img3.jpg" },
    ],
  },
  {
    id: 4,
    workType: "Pintura",
    name: "Ardion4",
    imgs: [
      { id: 1, src: "/img1.jpg" },
      { id: 2, src: "/logo.jpg" },
      { id: 3, src: "/img3.jpg" },
    ],
  },
];

export interface IImageSet {
  id: number;
  src: string;
  alt?: string;
}
