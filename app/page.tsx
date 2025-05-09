import { Album } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactForm from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <div className="grid justify-center p-10">
      <main className="grid grid-col-1 gap-8 md:grid-cols-2 md:gap-10">
        <section className="flex flex-col gap-3">
          <Card>
            <CardHeader>
              <CardTitle>{`We'd love to hear from you`}</CardTitle>
              <CardDescription>
                An accessible contact us form with client-side validations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </section>
        <section className="flex flex-col gap-3">
          <Card>
            <CardHeader>
              <CardTitle>Shadcn UI Buttons - Variants</CardTitle>
              <CardDescription>button variants</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-3">
              <Button variant={"outline"} aria-label="Outline button example">
                outline
              </Button>
              <Button variant={"link"} aria-label="Link button example">
                this is a link
              </Button>
              <Button variant={"default"} aria-label="Default button example">
                default
              </Button>
              <Button
                variant={"secondary"}
                aria-label="Secondary button example"
              >
                secondary
              </Button>
              <Button
                variant={"destructive"}
                aria-label="Destructive button example"
              >
                destructive
              </Button>
              <Button variant={"ghost"} aria-label="Ghost button example">
                ghost
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Shadcn UI Buttons - Sizes</CardTitle>
              <CardDescription>button sizes</CardDescription>
            </CardHeader>
            <CardContent className="flex gap-3">
              <Button variant={"default"} size="icon" aria-label="Album">
                <Album />
              </Button>
              <Button
                variant={"default"}
                size="sm"
                aria-label="Small button example"
              >
                sm
              </Button>
              <Button
                variant={"default"}
                aria-label="Default size button example"
              >
                default
              </Button>
              <Button
                variant={"default"}
                size="lg"
                aria-label="Large button example"
              >
                lg
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
