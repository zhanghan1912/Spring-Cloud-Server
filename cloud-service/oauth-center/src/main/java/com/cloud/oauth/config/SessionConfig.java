package com.cloud.oauth.config;

import org.springframework.session.data.redis.config.annotation.web.http.EnableRedisHttpSession;

/**
 * 开启session共享
 * 
 * @author Adyan Li
 *
 */
@EnableRedisHttpSession
public class SessionConfig {

}
