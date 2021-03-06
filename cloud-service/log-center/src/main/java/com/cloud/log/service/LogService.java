package com.cloud.log.service;

import java.util.List;
import java.util.Map;
import com.cloud.model.log.Log;

public interface LogService {

	/**
	 * 保存日志
	 *
	 * @param log
	 */
	void save(Log log);

	List<Log> findLogs(Map<String, Object> params);

}
