package com.ng2.aem.core.components;

import com.adobe.cq.sightly.WCMUsePojo;
import com.ng2.aem.core.models.ContactDetails;
import org.apache.sling.api.resource.ValueMap;
import com.google.gson.Gson;

 public class ContactDetailsUse extends WCMUsePojo {

	 private ContactDetails contactDetails;
	 private Gson contactDetailsJson; 
	 
	@Override
    public void activate() throws Exception {
		ValueMap properties = getProperties();	
		contactDetails = new ContactDetails();
		contactDetailsJson = new Gson();
		
		contactDetails.setTitle(properties.get("jcr:title",""));
		contactDetails.setDescription(properties.get("description",""));
		contactDetails.setFirstNameLabel(properties.get("firstNameLabel","Madhukar"));
		contactDetails.setLastNameLabel(properties.get("lastNameLabel","SAMALA"));
		contactDetails.setEmailLabel(properties.get("emailLabel","madhukar.samala@gmail.com"));
		contactDetails.setAddressLabel(properties.get("addressLabel","Alpharetta GA"));
		
		contactDetails.setContactJson(contactDetailsJson.toJson(contactDetails));
		
	}

	public ContactDetails getContactDetails() {
		return contactDetails;
	}

}
