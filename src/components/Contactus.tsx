import { useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { Loader, Send, Phone, Mail, MapPin } from "lucide-react";

const formSchema = z.object({
  Firstname: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." }),
  Secoundname: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Enter a valid email." }),
  subject: z.string().min(3, { message: "Subject is required." }),
  title: z
    .string()
    .min(5, { message: "Message must be at least 5 characters." }),
});

type ContactFormData = z.infer<typeof formSchema>;

export function Contact() {
  return (
    <div className="grid grid-cols-6 grid-rows-2 py-16 max-xs:py-8 px-4 max-xs:px-2 max-w-7xl mx-auto section-size gap-3 overflow-x-hidden">
      <ContactForm />
      <ContactInfo />
      <Availability />
    </div>
  );
}
function ContactInfo() {
  return (
    <div className="col-span-2 max-lg:col-span-3 max-sm:col-span-6">
      <h2 className="font-semibold text-xl px-4 max-xs:px-2 mb-3">
        Contact Information
      </h2>

      <div className="flex justify-start items-center gap-5 hover:bg-white dark:hover:bg-black py-3 px-5 max-xs:py-2 max-xs:px-2.5 rounded-md transition-colors cursor-pointer w-full">
        <div className="p-4 rounded-md focus">
          <Mail />
        </div>
        <div className="min-w-0">
          <h3>Email</h3>
          <a
            href="mailto:anasabdoali22@gmail.com"
            className="break-words w-full  text-stone-500"
          >
            anasabdoali22@gmail.com
          </a>
        </div>
      </div>

      <div className="flex justify-start items-center gap-5 hover:bg-white dark:hover:bg-black py-3 px-5 max-xs:py-2 max-xs:px-2.5 rounded-md transition-colors cursor-pointer w-full">
        <div className="p-4 rounded-md focus">
          <Phone />
        </div>
        <div className="min-w-0">
          <h3>Phone</h3>
          <a
            href="tel:01120038437"
            className="break-words w-full  text-stone-500"
          >
            01120038437
          </a>
        </div>
      </div>

      <div className="flex justify-start items-center gap-5 hover:bg-white dark:hover:bg-black py-3 px-5 max-xs:py-2 max-xs:px-2.5 rounded-md transition-colors cursor-pointer w-full">
        <div className="p-4 rounded-md focus">
          <MapPin />
        </div>
        <div className="min-w-0">
          <h3>Location</h3>
          <a
            href="https://maps.app.goo.gl/bF56MawThKsT97wTA"
            target="_blank"
            rel="noopener noreferrer"
            className="break-words w-full text-stone-500"
          >
            ElSheikh Zayed
          </a>
        </div>
      </div>
    </div>
  );
}
function Availability() {
  return (
    <section
      className="col-span-2 max-lg:col-span-3 max-sm:col-span-6 p-5 focus space-y-3"
      aria-label="Availability"
    >
      <h1 className="sm:text-2xl text-lg font-semibold">
        Current Availability
      </h1>

      <h2
        className="text-stone-500 flex items-center gap-2  sm:text-lg"
        role="status"
        aria-live="polite"
      >
        <span className="relative flex h-4 w-4">
          <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative  rounded-full h-4 w-4 bg-green-500"></span>
        </span>
        Available for new projects
      </h2>

      <p className="text-stone-500 sm:text-lg">
        I'm currently accepting new freelance projects and full-time
        opportunities. Let's discuss how we can work together!
      </p>
      <p className="font-medium sm:text-lg mt-10 max-sm:mt-3">
        I'm excited to hear from you! 😊✨
      </p>
    </section>
  );
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Firstname: "",
      Secoundname: "",
      email: "",
      subject: "",
      title: "",
    },
  });

  const onSubmit = async () => {
    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
        "service_b6je9ts",
        "template_h49v6ug",
        formRef.current,
        "iJncH7j5VlcEuvpXm"
      );
      toast.success("Message sent!");
      reset();
    } catch {
      toast.error("Failed to send message.");
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit(onSubmit)}
      className="row-span-2 col-span-4 max-lg:col-span-6 p-6 max-xs:px-4  rounded-lg shadow space-y-6 bg-secondary"
    >
      <h2 className="text-2xl font-bold flex gap-2 items-center">
        <Mail className="text-primary w-7 h-7" />
        Contact Me
      </h2>
      <div className="grid grid-cols-2 gap-5 max-xs:gap-3">
        <div className="space-y-1">
          <label htmlFor="firstName" className="block text-sm font-medium">
            FirstName
          </label>
          <input
            id="firstName"
            type="text"
            placeholder="Your First Name"
            {...register("Firstname")}
            className={`w-full p-2 bg-background border rounded-md focus:outline-none focus:ring ${
              errors.Firstname
                ? "border-red-500 ring-red-500"
                : "border-gray-300 dark:border-zinc-700"
            }`}
          />
          {errors.Firstname && (
            <p className="text-red-500 text-sm">{errors.Firstname.message}</p>
          )}
        </div>
        <div className="space-y-1">
          <label htmlFor="Secoundname" className="block text-sm font-medium">
            SecoundName
          </label>
          <input
            id="Secoundname"
            type="text"
            placeholder="Your Secound Name"
            {...register("Secoundname")}
            className={`w-full p-2 border rounded-md bg-background focus:outline-none focus:ring ${
              errors.Secoundname
                ? "border-red-500 ring-red-500"
                : "border-gray-300 dark:border-zinc-700"
            }`}
          />
          {errors.Secoundname && (
            <p className="text-red-500 text-sm">{errors.Secoundname.message}</p>
          )}
        </div>

        <div className="space-y-1 col-span-2">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            {...register("email")}
            className={`w-full p-2 border rounded-md bg-background focus:outline-none focus:ring ${
              errors.email
                ? "border-red-500 ring-red-500"
                : "border-gray-300 dark:border-zinc-700"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-1 col-span-2">
          <label htmlFor="subject" className="block text-sm font-medium">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            placeholder="Subject"
            {...register("subject")}
            className={`w-full p-2 border rounded-md bg-background focus:outline-none focus:ring ${
              errors.subject
                ? "border-red-500 ring-red-500"
                : "border-gray-300 dark:border-zinc-700"
            }`}
          />
          {errors.subject && (
            <p className="text-red-500 text-sm">{errors.subject.message}</p>
          )}
        </div>

        <div className="space-y-1 col-span-2">
          <label htmlFor="title" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="title"
            placeholder="Write your message here..."
            rows={5}
            {...register("title")}
            className={`w-full p-2 border rounded-md bg-background resize-none focus:outline-none focus:ring ${
              errors.title
                ? "border-red-500 ring-red-500"
                : "border-gray-300 dark:border-zinc-700"
            }`}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="font-semibold text-center w-full p-3 text-sm rounded-md max-xs:text-[12px] bg-foreground text-background  flex items-center justify-center gap-2 opacity-hover"
      >
        {isSubmitting ? <Loader className="animate-spin" /> : <Send />}
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
