import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { text } = await req.json();

    // Simulate AI Processing Delay (1.5s)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // In a real app, you would pass `text` to OpenAI/Gemini here.
    // We will mock an intelligent-looking FHIR response based on keywords.
    
    let riskLevel = "LOW";
    let condition = "Normal Condition";
    
    const lowerText = text.toLowerCase();
    if (lowerText.includes("green") || lowerText.includes("algae") || lowerText.includes("scum")) {
      riskLevel = "HIGH";
      condition = "Suspected Cyanobacteria (Toxic Algae) Bloom";
    } else if (lowerText.includes("smell") || lowerText.includes("sulfur") || lowerText.includes("dead")) {
      riskLevel = "CRITICAL";
      condition = "Severe Biological Contamination";
    } else if (lowerText.includes("trash") || lowerText.includes("plastic")) {
      riskLevel = "MEDIUM";
      condition = "Physical Pollution / Waste Accumulation";
    } else if (lowerText.includes("clear") || lowerText.includes("clean") || lowerText.includes("fish")) {
      riskLevel = "LOW";
      condition = "Healthy Ecosystem Observed";
    }

    // Mock FHIR Observation Resource
    const fhirResource = {
      resourceType: "Observation",
      status: "preliminary",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/observation-category",
              code: "environment",
              display: "Environmental Health"
            }
          ]
        }
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "92831-7",
            display: "Water quality assessment"
          }
        ],
        text: condition
      },
      subject: {
        display: "Location: Citizen Geolocation"
      },
      valueString: `AI Risk Assessment: ${riskLevel} - Generated from citizen input: "${text}"`,
      note: [
        {
          text: "Automated via AquaFHIR AI NLP Engine"
        }
      ]
    };

    return NextResponse.json({
      riskLevel,
      condition,
      fhir: fhirResource
    });

  } catch (error) {
    return NextResponse.json({ error: "Failed to process observation" }, { status: 500 });
  }
}
