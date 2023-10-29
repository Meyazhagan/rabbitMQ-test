export enum MyMessageBrokerTopics {
  TopicSampleV1 = "topic.sample.v1",
}

export enum MyMessageBroker1Topics {
  TopicTestV1 = "topic.test.v1",
}
export type AllMessageBrokerTopics =
  | MyMessageBrokerTopics
  | MyMessageBroker1Topics;
