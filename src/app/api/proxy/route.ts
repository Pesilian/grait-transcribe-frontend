// app/api/proxy/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const formData = await req.formData()
    const file = formData.get('audio_file')

    if (!file) {
      return new NextResponse('No file uploaded', { status: 400 })
    }

    const response = await fetch('https://grait.website/diarize', {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) {
      throw new Error('External API request failed')
    }

    const result = await response.json()
    return new NextResponse(JSON.stringify(result), { status: response.status })
  } catch (error) {
    console.error('Error in proxy:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
