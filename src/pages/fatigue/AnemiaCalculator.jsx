import { useState } from 'react'
import { BackButton } from '../../components/BackButton'
import { SectionHeader } from '../../components/SectionHeader'

export default function AnemiaCalculator() {
  const [gender, setGender] = useState('Female')
  const [values, setValues] = useState({
    serum_iron: '',
    rbc: '',
    hemoglobin: '',
    hematocrit: '',
    mcv: '',
    mch: '',
    mchc: ''
  })
  const [result, setResult] = useState(null)

  const thresholds = {
    female: {
      pathologicalIronDeficiency: {
        serum_iron: 27,
        rbc: 3.77,
        hemoglobin: 11.1,
        hematocrit: 34,
        mcv: 79,
        mchc: 31.5,
        mch: 26.6
      },
      functionalIronDeficiency: {
        serum_iron: 85,
        rbc: 3.9,
        hemoglobin: 13.5,
        hematocrit: 37,
        mcv: 85,
        mchc: 32,
        mch: 27.7
      },
      pathologicalB12FolicAcid: {
        mcv: 97,
        mchc: 33,
        mch: 35.7
      },
      functionalB12FolicAcid: {
        mcv: 92,
        mchc: 32,
        mch: 36
      }
    },
    male: {
      pathologicalIronDeficiency: {
        serum_iron: 40,
        rbc: 4.1,
        hemoglobin: 12.5,
        hematocrit: 36,
        mcv: 79,
        mchc: 31.5,
        mch: 26.6
      },
      functionalIronDeficiency: {
        serum_iron: 85,
        rbc: 4.4,
        hemoglobin: 14,
        hematocrit: 39,
        mcv: 85,
        mchc: 32,
        mch: 27.7
      },
      pathologicalB12FolicAcid: {
        mcv: 97,
        mchc: 33,
        mch: 35.7
      },
      functionalB12FolicAcid: {
        mcv: 92,
        mchc: 32,
        mch: 36
      }
    }
  }

  const handleInputChange = (field, value) => {
    setValues(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const calculateResult = () => {
    const genderKey = gender === 'Female' ? 'female' : 'male'
    const thresholdSet = thresholds[genderKey]

    const v = {
      serum_iron: parseFloat(values.serum_iron) || 0,
      rbc: parseFloat(values.rbc) || 0,
      hemoglobin: parseFloat(values.hemoglobin) || 0,
      hematocrit: parseFloat(values.hematocrit) || 0,
      mcv: parseFloat(values.mcv) || 0,
      mch: parseFloat(values.mch) || 0,
      mchc: parseFloat(values.mchc) || 0
    }

    // Check pathological iron deficiency
    const pathIronDeficiency =
      v.serum_iron < thresholdSet.pathologicalIronDeficiency.serum_iron ||
      v.rbc < thresholdSet.pathologicalIronDeficiency.rbc ||
      v.hemoglobin < thresholdSet.pathologicalIronDeficiency.hemoglobin ||
      v.hematocrit < thresholdSet.pathologicalIronDeficiency.hematocrit ||
      v.mcv < thresholdSet.pathologicalIronDeficiency.mcv ||
      v.mchc < thresholdSet.pathologicalIronDeficiency.mchc ||
      v.mch < thresholdSet.pathologicalIronDeficiency.mch

    if (pathIronDeficiency) {
      setResult('Pathological Iron Deficiency Anemic')
      return
    }

    // Check functional iron deficiency
    const funcIronDeficiency =
      v.serum_iron < thresholdSet.functionalIronDeficiency.serum_iron ||
      v.rbc < thresholdSet.functionalIronDeficiency.rbc ||
      v.hemoglobin < thresholdSet.functionalIronDeficiency.hemoglobin ||
      v.hematocrit < thresholdSet.functionalIronDeficiency.hematocrit ||
      v.mcv < thresholdSet.functionalIronDeficiency.mcv ||
      v.mchc < thresholdSet.functionalIronDeficiency.mchc ||
      v.mch < thresholdSet.functionalIronDeficiency.mch

    if (funcIronDeficiency) {
      setResult('Functional Iron Deficiency Anemia')
      return
    }

    // Check pathological B12/Folic acid
    const pathB12FolicAcid =
      v.mcv > thresholdSet.pathologicalB12FolicAcid.mcv ||
      v.mchc > thresholdSet.pathologicalB12FolicAcid.mchc ||
      v.mch > thresholdSet.pathologicalB12FolicAcid.mch

    if (pathB12FolicAcid) {
      setResult('Pathologic B12 or Folic Acid Deficiency (Macrocyctic Anemia)')
      return
    }

    // Check functional B12/Folic acid
    const funcB12FolicAcid =
      v.mcv > thresholdSet.functionalB12FolicAcid.mcv ||
      v.mchc > thresholdSet.functionalB12FolicAcid.mchc ||
      v.mch > thresholdSet.functionalB12FolicAcid.mch

    if (funcB12FolicAcid) {
      setResult('Functional B12 or Folic Acid Deficiency (Macrocyctic Anemia)')
      return
    }

    setResult('Within Normal Functional and Pathological Ranges')
  }

  const isComplete = values.serum_iron && values.rbc && values.hemoglobin &&
                     values.hematocrit && values.mcv && values.mch && values.mchc

  return (
    <div>
      <div className="mb-4">
        <BackButton />
      </div>

      <SectionHeader title="Anemia Calculator" emoji="🔋" />

      <div className="card mb-6">
        {!result ? (
          <>
            <h2 className="text-lg font-semibold text-shc-text mb-4">
              Enter Your Blood Work Values
            </h2>

            <div className="mb-4">
              <label className="block text-sm font-medium text-shc-text mb-2">
                Gender
              </label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full px-3 py-2 rounded-shc bg-shc-bg border border-shc-border text-shc-text focus:border-shc-green focus:ring-1 focus:ring-shc-green"
              >
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div className="space-y-3 mb-6">
              {[
                { key: 'serum_iron', label: 'Serum Iron' },
                { key: 'rbc', label: 'RBC (Red Blood Cell Count)' },
                { key: 'hemoglobin', label: 'Hemoglobin' },
                { key: 'hematocrit', label: 'Hematocrit' },
                { key: 'mcv', label: 'MCV (Mean Corpuscular Volume)' },
                { key: 'mch', label: 'MCH (Mean Corpuscular Hemoglobin)' },
                { key: 'mchc', label: 'MCHC (Mean Corpuscular Hemoglobin Concentration)' }
              ].map(({ key, label }) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-shc-text mb-1">
                    {label}
                  </label>
                  <input
                    type="number"
                    placeholder="0.0"
                    step="0.1"
                    value={values[key]}
                    onChange={(e) => handleInputChange(key, e.target.value)}
                    className="w-full px-3 py-2 rounded-shc bg-shc-bg border border-shc-border text-shc-text focus:border-shc-green focus:ring-1 focus:ring-shc-green"
                  />
                </div>
              ))}
            </div>

            <button
              onClick={calculateResult}
              disabled={!isComplete}
              className="w-full px-4 py-3 rounded-shc bg-shc-green text-black font-semibold hover:bg-shc-green-hover active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Calculate Result
            </button>
          </>
        ) : (
          <>
            <h2 className="text-lg font-semibold text-shc-text mb-4">
              Your Result
            </h2>

            <div className="bg-shc-bg rounded-shc p-4 mb-6 border border-shc-border">
              <p className="text-shc-text font-semibold text-center">
                {result}
              </p>
            </div>

            <div className="space-y-2">
              <button
                onClick={() => {
                  setResult(null)
                  setValues({
                    serum_iron: '',
                    rbc: '',
                    hemoglobin: '',
                    hematocrit: '',
                    mcv: '',
                    mch: '',
                    mchc: ''
                  })
                }}
                className="w-full px-4 py-3 rounded-shc bg-shc-card border border-shc-border text-shc-text font-semibold hover:bg-shc-bg hover:border-shc-green active:scale-95 transition-all duration-200"
              >
                Calculate Again
              </button>
              <button
                onClick={() => window.history.back()}
                className="w-full px-4 py-3 rounded-shc bg-shc-green text-black font-semibold hover:bg-shc-green-hover active:scale-95 transition-all duration-200"
              >
                Back
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
