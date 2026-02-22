'use strict';

const { NodeSDK } = require('@opentelemetry/sdk-node');
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-http');
const { OTLPMetricExporter } = require('@opentelemetry/exporter-metrics-otlp-http');

const sdk = new NodeSDK({
  traceExporter: new OTLPTraceExporter({
    url: 'http://cluster-collector.otel-system.svc.cluster.local:4318/v1/traces',
  }),
  metricExporter: new OTLPMetricExporter({
    url: 'http://cluster-collector.otel-system.svc.cluster.local:4318/v1/metrics',
  }),
  instrumentations: [getNodeAutoInstrumentations()],
});

sdk.start();

console.log("OpenTelemetry initialized");
