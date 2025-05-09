import CheckIcon from "@/app/assets/svgs/CheckIcon";
import XIcon from "@/app/assets/svgs/XIcon";
import Link from "next/link";

const subscriptionPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-600">
            Find the perfect plan for your street food adventures
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Free</h3>
              <p className="text-4xl font-bold text-primary">
                $0<span className="text-lg text-gray-500">/month</span>
              </p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <CheckIcon />
                Basic search functionality
              </li>
              <li className="flex items-center">
                <CheckIcon />
                Read reviews
              </li>
              <li className="flex items-center">
                <CheckIcon />
                Save up to 5 favorite spots
              </li>
              <li className="flex items-center text-gray-400">
                <XIcon />
                Submit reviews
              </li>
              <li className="flex items-center text-gray-400">
                <XIcon />
                Premium search filters
              </li>
              <li className="flex items-center text-gray-400">
                <XIcon />
                Priority support
              </li>
            </ul>

            <Link
              href="/register"
              className="block w-full text-center bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Premium Plan */}
          <div className="bg-primary/90 rounded-lg shadow-lg p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-yellow-400 text-primary px-4 py-1 text-sm font-bold rotate-45 translate-x-8 translate-y-4">
              Most Popular
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Premium</h3>
              <p className="text-4xl font-bold text-white">
                $9.99<span className="text-lg text-orange-200">/month</span>
              </p>
            </div>

            <ul className="space-y-4 mb-8 text-orange-50">
              <li className="flex items-center">
                <CheckIcon />
                Unlimited favorite spots
              </li>
              <li className="flex items-center">
                <CheckIcon />
                Submit unlimited reviews
              </li>
              <li className="flex items-center">
                <CheckIcon />
                Advanced search filters
              </li>
              <li className="flex items-center">
                <CheckIcon />
                Premium member badge
              </li>
              <li className="flex items-center">
                <CheckIcon />
                24/7 Priority support
              </li>
              <li className="flex items-center">
                <CheckIcon />
                Early access to new features
              </li>
            </ul>

            <Link
              href="/subscription/checkout"
              className="block w-full text-center bg-white text-primary py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Upgrade Now
            </Link>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-2">Can I upgrade later?</h3>
              <p className="text-gray-600">
                Yes, you can upgrade to Premium at any time from your account
                settings.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-2">Is my payment secure?</h3>
              <p className="text-gray-600">
                We use industry-standard encryption to protect your payment
                information.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-2">Can I cancel anytime?</h3>
              <p className="text-gray-600">
                Yes, you can cancel your Premium subscription at any time with
                no hidden fees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default subscriptionPage;
