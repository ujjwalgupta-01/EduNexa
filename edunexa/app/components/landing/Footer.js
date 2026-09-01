import Link from "next/link";
import Image from "next/image";
import FooterColumn from "./footerColumn";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#0b1025] text-white"
    >

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">

          {/* Brand */}
          <div className="lg:col-span-2">

            <Link
              href="/"
              className="flex items-center gap-2"
            >

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 font-black">
                <Image src="/icon.png" height={40} width={40} alt="Logo"></Image>
              </div>

              <span className="text-xl font-bold">
                Edunexa
              </span>

            </Link>

            <p className="mt-5 max-w-sm leading-7 text-gray-400">
              A unified learning platform built to empower
              students, support teachers, and keep parents connected.
            </p>

          </div>

          {/* Product */}
          <FooterColumn
            title="Product"
            links={[
              "Features",
              "How It Works",
              "Pricing",
              "Updates",
            ]}
          />

          {/* Company */}
          <FooterColumn
            title="Company"
            links={[
              "About Us",
              "Our Mission",
              "Careers",
              "Contact Us",
            ]}
          />

          {/* Resources */}
          <FooterColumn
            title="Resources"
            links={[
              "Blog",
              "Help Center",
              "Guides",
              "Privacy Policy",
            ]}
          />

        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col justify-between gap-5 border-t border-white/10 pt-7 text-sm text-gray-500 sm:flex-row">

          <p>
            © 2026 Edunexa. All rights reserved.
          </p>

          <div className="flex gap-6">

            <Link href="/terms">
              Terms of Service
            </Link>

            <Link href="/privacy">
              Privacy Policy
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}