import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { BEST_SELLER } from "@/constants/BEST_SELLER";
import { salsa } from "@/fonts/fonts";
import { cn } from "@/lib/utils";
import HeroImage from "@/public/hero-image.avif";
import Image from "next/image";

export default function Homepage() {
  return (
    <main className="max-w-screen-lg mx-auto">
      <section className="relative h-screen max-h-[20rem]">
        <Image
          src={HeroImage}
          alt="Hero Image"
          fill
          placeholder="blur"
          className="object-cover"
          sizes="(min-width: 1080px) 1024px, 95.26vw"
        />
        <h1 className="absolute left-[6%] top-1/3 w-[24rem] text-balance text-3xl text-white sm:w-[26rem] md:w-[30rem]">
          Welcome to{" "}
          <span
            className={cn(
              "space-nowrap font-salsa text-4xl font-bold text-primary",
              salsa.variable,
            )}
            style={{
              WebkitTextStroke: "1px black",
            }}
          >
            Baker Kings!
          </span>
          <br />
          Enjoy the Delicious and Soft Breads!
        </h1>
        <Button
          variant="outline"
          className="absolute left-[6%] top-3/4 border-0 bg-primary-foreground text-white ring-0 hover:bg-primary-foreground/90 hover:text-white"
        >
          Buy now
        </Button>
      </section>
      <section className="px-8 md:px-0">
        <h2 className="my-10 text-3xl font-bold text-center text-primary-foreground">
          Our Best Sellers
        </h2>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-screen-sm mx-auto cursor-pointer"
        >
          <CarouselContent>
            {BEST_SELLER.map((image, index) => (
              <CarouselItem key={index} className="basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="relative overflow-hidden border-0">
                    <CardContent className="relative flex items-center justify-center p-6 overflow-hidden aspect-square size-full">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        className="object-cover rounded-md"
                        fill
                      />
                    </CardContent>
                    <Button
                      variant="outline"
                      className="absolute left-[6%] top-3/4 border-0 bg-primary-foreground text-white ring-0 hover:bg-primary-foreground/90 hover:text-white"
                    >
                      Buy now
                    </Button>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:block" />
          <CarouselNext className="hidden md:block" />
        </Carousel>

        <Card className="relative flex flex-col max-w-screen-md mx-auto mt-10 md:flex-row">
          <CardHeader className="gap-y-5 md:w-1/2">
            <CardTitle className="text-primary-foreground">Ciabata</CardTitle>
            <CardDescription className="text-accent-foreground">
              Characterized by a slipper shape as well as an extremely porous
              and chewy texture.
            </CardDescription>
            <Button
              variant="outline"
              className="text-white border-0 w-fit bg-primary-foreground ring-0 hover:bg-primary-foreground/90 hover:text-white"
            >
              Buy now
            </Button>
          </CardHeader>
          <CardContent className="flex-1 p-0">
            <AspectRatio ratio={16 / 9} className="relative">
              <Image
                src="/ciabata-bread.avif"
                alt="Ciabata"
                fill
                className="object-cover rounded-md"
              />
            </AspectRatio>
          </CardContent>
          <div className="absolute grid p-2 text-center text-white rounded-full -bottom-10 -right-10 size-20 place-items-center bg-destructive">
            50% sale
          </div>
        </Card>
      </section>
    </main>
  );
}
