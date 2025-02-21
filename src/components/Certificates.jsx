import { CERTIFICATES } from "../constants";

const Certificates = () => {
  return (
    <div className="border-b border-neutral-900 pd-4">
      <h2 className="my-20 text-center text-4xl text-neutral-300">
        Certificates
      </h2>
      <div>
        {CERTIFICATES.map((certificate, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <img
                src={certificate.image}
                width={150}
                height={150}
                alt={certificate.name}
                className="mb-6 rounded brightness-75"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold text-neutral-300">
                {certificate.name} -{" "}
                <span className="text-sm text-purple-100">
                  {certificate.institution}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{certificate.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Certificates;
