// Copyright 2018-2020 Polyaxon, Inc.
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

// Code generated by go-swagger; DO NOT EDIT.

package service_model

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"github.com/go-openapi/errors"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// V1Notification Notification message
//
// swagger:model v1Notification
type V1Notification struct {

	// Connections to use for notification
	Connections []string `json:"connections"`

	// Optional trigger policy, default done
	Trigger NotificationTrigger `json:"trigger,omitempty"`
}

// Validate validates this v1 notification
func (m *V1Notification) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateTrigger(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *V1Notification) validateTrigger(formats strfmt.Registry) error {

	if swag.IsZero(m.Trigger) { // not required
		return nil
	}

	if err := m.Trigger.Validate(formats); err != nil {
		if ve, ok := err.(*errors.Validation); ok {
			return ve.ValidateName("trigger")
		}
		return err
	}

	return nil
}

// MarshalBinary interface implementation
func (m *V1Notification) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *V1Notification) UnmarshalBinary(b []byte) error {
	var res V1Notification
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
