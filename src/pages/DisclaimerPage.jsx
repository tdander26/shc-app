import { SectionHeader } from '../components/SectionHeader'

export default function DisclaimerPage() {
  return (
    <div>
      <SectionHeader
        title="Disclaimer"
        emoji="⚠️"
        subtitle="Please read carefully"
      />

      <div className="space-y-4">
        <div className="card">
          <h3 className="text-base font-semibold text-shc-text mb-2">Medical Information</h3>
          <p className="text-sm text-shc-muted leading-relaxed">
            The information provided in this application is for educational purposes only and should not be considered as medical advice. It is not intended to diagnose, treat, cure, or prevent any disease or health condition.
          </p>
        </div>

        <div className="card">
          <h3 className="text-base font-semibold text-shc-text mb-2">Consult Healthcare Providers</h3>
          <p className="text-sm text-shc-muted leading-relaxed">
            Always consult with qualified healthcare professionals, including physicians, before starting any new health regimen, supplement, or making significant changes to your lifestyle based on the information provided in this app.
          </p>
        </div>

        <div className="card">
          <h3 className="text-base font-semibold text-shc-text mb-2">Individual Variability</h3>
          <p className="text-sm text-shc-muted leading-relaxed">
            Results and recommendations may vary based on individual health conditions, medications, allergies, and other factors. What works for one person may not work for another.
          </p>
        </div>

        <div className="card">
          <h3 className="text-base font-semibold text-shc-text mb-2">Emergency Situations</h3>
          <p className="text-sm text-shc-muted leading-relaxed">
            If you experience severe symptoms or believe you are having a medical emergency, please contact emergency services or go to the nearest emergency room immediately.
          </p>
        </div>

        <div className="card">
          <h3 className="text-base font-semibold text-shc-text mb-2">Liability</h3>
          <p className="text-sm text-shc-muted leading-relaxed">
            The creators of this application are not liable for any adverse effects resulting from the use or misuse of the information provided. Users assume all responsibility for their health decisions.
          </p>
        </div>

        <div className="card bg-shc-bg border-l-4 border-shc-green">
          <p className="text-sm text-shc-muted leading-relaxed">
            By using this application, you acknowledge that you have read and understood this disclaimer and agree to use the information at your own risk.
          </p>
        </div>
      </div>
    </div>
  )
}
