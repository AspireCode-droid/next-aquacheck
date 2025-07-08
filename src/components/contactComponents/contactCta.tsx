import {Card, CardContent} from '@/components/ui/card'
import { Zap } from 'lucide-react'
import {Button} from '@/components/ui/button'

export default function ContactPageCta(){
    return(
        <section className=''>
            <Card className="border-0 pb-12 rounded-none bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
                <CardContent className="pt-6">
                    <div className="text-center mb-6">
                    <div className="relative inline-block">
                        <div className="absolute inset-0 bg-white/20 rounded-full blur-lg" />
                        <div className="relative bg-white/10 p-4 rounded-full backdrop-blur-sm">
                        <Zap className="h-8 w-8 text-white" />
                        </div>
                    </div>
                    <h3 className="font-bold text-xl md:text-2xl lg:text-4xl mt-4 mb-2">Emergency Testing</h3>
                    <p className="text-cyan-100 leading-relaxed">
                        Need urgent water quality testing? We offer 24/7 emergency services for critical situations.
                    </p>
                    </div>
                    <div className='mx-auto flex justify-center px-6'>
                        <Button
                        variant="outline"
                        size='lg'
                        className="border-white/30 text-white hover:bg-white hover:text-cyan-600 bg-white/10 backdrop-blur-sm rounded-xl h-12 px-4 font-medium transition-all duration-300"
                        >
                        Call Emergency Line
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </section>    
    )
}