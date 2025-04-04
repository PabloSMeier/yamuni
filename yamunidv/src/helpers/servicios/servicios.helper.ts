export interface IServicio {
  id: number;
  name: string;
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
    description: "lorem ipsum dolor sit amet, consectetur adipis",
    trabajoId: [1, 2],
  },
  {
    id: 2,
    name: "Pintura",
    description: "lorem ipsum dolorr sit amet, consectetur adipis",
    trabajoId: [1, 2],
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
    id: 1,
    workType: "Pintura",
    name: "Ardion3",
    imgs: [
      { id: 1, src: "/img1.jpg" },
      { id: 2, src: "/logo.jpg" },
      { id: 3, src: "/img3.jpg" },
    ],
  },
  {
    id: 2,
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
