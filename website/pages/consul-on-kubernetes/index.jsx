import Head from 'next/head'
import { features } from 'data/consul-on-kubernetes'
import FeaturesList from 'components/features-list'

export default function ConsulOnKubernetesPage() {
  return (
    <div>
      <Head>
        <title key="title">Consul on Kubernetes</title>
      </Head>
      {/* header */}
      <section>
        <FeaturesList title="Why Consul on Kubernetes" features={features} />
      </section>
      {/* features list section */}
      {/* get started section */}
    </div>
  )
}
