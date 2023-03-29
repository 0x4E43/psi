import {
  ClockIcon,
  HeartIcon,
  DocumentIcon,
  GlobeAsiaAustraliaIcon
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "24 x 7 Support",
    description:
      "We ansure you to experience uninterrupted assistance and peace of mind with our 24x7 service - our team of dedicated professionals is available round-the-clock to provide you with swift and efficient support, whenever you need it.",
    icon: ClockIcon,
  },
  {
    name: "Simple and Convenient",
    description:
      "We Streamline your experience with our simple and convenient solutions - designed with your ease in mind, our user-friendly tools and services are here to simplify your tasks and help you achieve your goals effortlessly.",
    icon: HeartIcon,
  },
  {
    name: "Hassle Free Process",
    description:
      "Say goodbye to tedious procedures and welcome a hassle-free process - our seamless and efficient system is built to take care of everything for you, from start to finish, so that you can focus on what truly matters.",
    icon: DocumentIcon,
  },
  {
    name: "Discover a World of Possibilities",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetrUnlock endless opportunities with our innovative solutions - explore new horizons, reach greater heights, and redefine success on your own terms.",
    icon: GlobeAsiaAustraliaIcon,
  },
];

export default function Content() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            What Are We
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Best-In-Class Professional Services Provider
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            <b className="underline">PsiKnowLogix</b> is a premier consulting
            and professional services company, offering cutting-edge solutions
            to organizations around the world. With a powerful blend of people,
            processes, and groundbreaking technology-enabled solutions, we
            streamline operations, increase cash flow, reduce costs and maximize
            compliance while providing an edge over the competition.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
