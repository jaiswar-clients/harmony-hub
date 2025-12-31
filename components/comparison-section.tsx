"use client"

import { Badge } from "@/components/ui/badge"
import { Check, X } from "lucide-react"

const comparisonData = [
  {
    feature: "Cost Predictability",
    harmonyhub: "Predictable Monthly",
    traditional: "Varies Per Event",
    inhouse: "Staff Time + Vendor Costs",
  },
  {
    feature: "Service Range",
    harmonyhub: "7+ Services",
    traditional: "Single Service",
    inhouse: "Limited Options",
  },
  {
    feature: "Impact Reports",
    harmonyhub: true,
    traditional: false,
    inhouse: false,
  },
  {
    feature: "Coordination Effort",
    harmonyhub: "Fully Managed",
    traditional: "You Coordinate",
    inhouse: "You Coordinate",
  },
  {
    feature: "Scalability",
    harmonyhub: "Grows With You",
    traditional: "New Vendor Each Time",
    inhouse: "Limited Bandwidth",
  },
]

export function ComparisonSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Badge variant="pill" className="bg-muted text-black border-4 border-black">
            Comparison
          </Badge>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] text-black mt-8">
            WHY CHOOSE
            <br />
            <span className="text-primary">HARMONYHUB?</span>
          </h2>
          <p className="mt-6 text-lg font-bold text-black/70">See how we compare to traditional approaches.</p>
        </div>

        {/* Comparison Table */}
        <div className="border-4 border-black shadow-brutal-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b-4 border-black bg-secondary">
                  <th className="p-6 text-left font-black uppercase tracking-wide text-black"></th>
                  <th className="p-6 text-center">
                    <div className="inline-flex flex-col items-center gap-1 border-4 border-black bg-primary px-6 py-4 shadow-brutal-sm">
                      <span className="font-black uppercase text-white text-sm">HarmonyHub</span>
                      <span className="text-xs font-bold text-white/90">Subscription</span>
                    </div>
                  </th>
                  <th className="p-6 text-center font-black uppercase tracking-wide text-black">
                    <div className="flex flex-col items-center gap-1">
                      <span>Traditional</span>
                      <span className="text-xs font-bold text-black/70">Vendors</span>
                    </div>
                  </th>
                  <th className="p-6 text-center font-black uppercase tracking-wide text-black">
                    <div className="flex flex-col items-center gap-1">
                      <span>In-House</span>
                      <span className="text-xs font-bold text-black/70">HR Planning</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b-4 border-black last:border-b-0 bg-white hover:bg-yellow-100 transition-colors"
                  >
                    <td className="p-6 font-black uppercase tracking-wide text-black text-sm">{row.feature}</td>
                    <td className="p-6 text-center bg-secondary/20">
                      {typeof row.harmonyhub === "boolean" ? (
                        row.harmonyhub ? (
                          <div className="inline-flex items-center justify-center border-2 border-black bg-primary p-2">
                            <Check className="h-5 w-5 text-white" strokeWidth={3} />
                          </div>
                        ) : (
                          <X className="mx-auto h-6 w-6 text-black/30" strokeWidth={3} />
                        )
                      ) : (
                        <span className="text-sm font-black uppercase tracking-wide text-primary">{row.harmonyhub}</span>
                      )}
                    </td>
                    <td className="p-6 text-center">
                      {typeof row.traditional === "boolean" ? (
                        row.traditional ? (
                          <div className="inline-flex items-center justify-center border-2 border-black bg-primary p-2">
                            <Check className="h-5 w-5 text-white" strokeWidth={3} />
                          </div>
                        ) : (
                          <X className="mx-auto h-6 w-6 text-black/30" strokeWidth={3} />
                        )
                      ) : (
                        <span className="text-sm font-bold text-black/70">{row.traditional}</span>
                      )}
                    </td>
                    <td className="p-6 text-center">
                      {typeof row.inhouse === "boolean" ? (
                        row.inhouse ? (
                          <div className="inline-flex items-center justify-center border-2 border-black bg-primary p-2">
                            <Check className="h-5 w-5 text-white" strokeWidth={3} />
                          </div>
                        ) : (
                          <X className="mx-auto h-6 w-6 text-black/30" strokeWidth={3} />
                        )
                      ) : (
                        <span className="text-sm font-bold text-black/70">{row.inhouse}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
