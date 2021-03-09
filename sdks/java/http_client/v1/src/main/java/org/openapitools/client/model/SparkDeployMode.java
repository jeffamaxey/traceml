// Copyright 2018-2021 Polyaxon, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/*
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 1.7.0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.annotations.SerializedName;

import java.io.IOException;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;

/**
 * Gets or Sets SparkDeployMode
 */
@JsonAdapter(SparkDeployMode.Adapter.class)
public enum SparkDeployMode {
  
  CLUSTER("cluster"),
  
  CLIENT("client"),
  
  IN_CLUSTER_CLIENT("in_cluster_client");

  private String value;

  SparkDeployMode(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static SparkDeployMode fromValue(String value) {
    for (SparkDeployMode b : SparkDeployMode.values()) {
      if (b.value.equals(value)) {
        return b;
      }
    }
    throw new IllegalArgumentException("Unexpected value '" + value + "'");
  }

  public static class Adapter extends TypeAdapter<SparkDeployMode> {
    @Override
    public void write(final JsonWriter jsonWriter, final SparkDeployMode enumeration) throws IOException {
      jsonWriter.value(enumeration.getValue());
    }

    @Override
    public SparkDeployMode read(final JsonReader jsonReader) throws IOException {
      String value = jsonReader.nextString();
      return SparkDeployMode.fromValue(value);
    }
  }
}

