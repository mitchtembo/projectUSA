import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import girl from "../images/girl-holding-flag.jpg";

export default function Hero() {
  return (
    <div className="relative bg-purple-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col lg:flex-row items-center">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            Your Gateway to Education in the USA
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-purple-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Professional guidance for international students seeking to study and build their career in the United States.
          </p>
          <div className="mt-5 sm:mt-8">
            <Button asChild size="lg">
              <a href="#contact">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-1/2">
          <Image
            src={girl}
            alt="Black students graduating"
            width={600}
            height={400}
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1440 320">
          <path
            fill="#f9fafb"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  )
}

