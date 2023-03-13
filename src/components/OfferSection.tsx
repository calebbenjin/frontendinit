import {
  BoltIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  ScaleIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Frontend Developer Roadmap',
    description:
      "Don't walk alone. We have an up-to-date and well-tailored frontend developer roadmap with learning resources and recommended projects to build.",
    icon: GlobeAltIcon,
  },
  {
    name: 'Access To Free Learning Resources',
    description:
      'Have access to quality free resource to learn and improve your skill.',
    icon: ScaleIcon,
  },
  {
    name: 'Access to best practices',
    description:
      'Have access to code best practice shared by other senior engineers.',
    icon: BoltIcon,
  },
  {
    name: 'Newsletter that will 10x Your Frontend Engineering Career',
    description:
      'Get amazing career growth, interview preparation, job update tips right in your inbox.',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Interview Preparation Tips',
    description:
      'We have dedicated channel for interview preparation tips, resources to help you build confidence on your next interview.',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Job Openings Updates',
    description:
      'Stay tuned for our latest updates. We have a channel dedicated for frontend developers Job listing, from intenship to senior roles.',
    icon: DevicePhoneMobileIcon,
  },
];

export default function OfferSection() {
  return (
    <div className="bg-white py-24 sm:py-10 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-lg font-semibold leading-8 text-indigo-600">
            Reasons
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Join a Community?
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            For the first time, you will find your language, your clan, and a
            passionate community motivated by builders.
          </p>
        </div>

        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                  <feature.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-gray-900">
                    {feature.name}
                  </p>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
