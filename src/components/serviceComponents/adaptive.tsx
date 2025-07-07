import WaterSystemMorph from "@/components/serviceComponents/morhpSystem"

export default function AdaptiveServiceSolutions() {
    return(
        <section className="flex flex-col space-y-3 px-4">
            <h3 className="text-2xl font-bold text-center text-gray-900">Adaptive Service Solutions</h3>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
                We tailor our services to meet the unique needs of different facilities, delivering safe, compliant, and efficient water systems nationwide
            </p>
            <WaterSystemMorph />
        </section>
    )
};