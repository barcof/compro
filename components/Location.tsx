// import { GoogleMapsEmbed } from "@next/third-parties/google";
import { MapPin } from "lucide-react";

const location = [
  {
    source:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.822309269554!2d107.15466197368468!3d-6.287072993701861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6985c448f360cd%3A0x646292a507f51645!2sPT.%20GAPURA%20KENCANA%20-%20CIKARANG!5e0!3m2!1sid!2sid!4v1787058025097!5m2!1sid!2sid",
    title: "Office",
  },
  {
    source:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d589.7994751324883!2d106.03907181875825!3d-6.0382857123652744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e418f82a4ac6c99%3A0xfee4b78f977217b7!2sPT.%20Gapura%20kencana!5e0!3m2!1sid!2sid!4v1787066437058!5m2!1sid!2sid",
    title: "Representative Service Center",
  },
];

const Location = () => {
  return (
    <div className="flex flex-col gap-1">
      {location.map((loc, index) => (
        <div className="flex flex-col w-full h-100" key={index}>
          <div className="flex items-center gap-2 text-2xl font-bold p-4">
            <div className="flex rounded-full bg-accent/5 p-3 text-accent hover:animate-pulse">
              <MapPin className="h-6 w-6" />
            </div>
            <p className="text-accent">{loc.title}</p>
          </div>
          <iframe
            src={loc.source}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      ))}
    </div>
  );
};

export default Location;
