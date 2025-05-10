import { FreePlanCard } from "@/components/modules/subscription/free_plan";
import { PremiumPlanCard } from "@/components/modules/subscription/premium_plan";

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
          <FreePlanCard />
          {/* Premium Plan */}
          <PremiumPlanCard />
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
