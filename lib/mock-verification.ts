import { EventEmitter } from 'events'

class MockVerificationService {
  private static instance: MockVerificationService
  private eventEmitter: EventEmitter
  private verificationCodes: Map<string, string>

  private constructor() {
    this.eventEmitter = new EventEmitter()
    this.verificationCodes = new Map()
  }

  public static getInstance(): MockVerificationService {
    if (!MockVerificationService.instance) {
      MockVerificationService.instance = new MockVerificationService()
    }
    return MockVerificationService.instance
  }

  public sendVerificationCode(phone: string, code: string): void {
    this.verificationCodes.set(phone, code)
    this.eventEmitter.emit('codeSent', { phone, code })
    
    // Log the code in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`[MOCK] Codice di verifica per ${phone}: ${code}`)
    }
  }

  public getVerificationCode(phone: string): string | undefined {
    return this.verificationCodes.get(phone)
  }

  public onCodeSent(callback: (data: { phone: string; code: string }) => void): void {
    this.eventEmitter.on('codeSent', callback)
  }

  public removeCodeSentListener(callback: (data: { phone: string; code: string }) => void): void {
    this.eventEmitter.off('codeSent', callback)
  }
}

export const mockVerificationService = MockVerificationService.getInstance() 